from flask import Flask, request, jsonify
from joblib import load
import pandas as pd
import io
from sklearn.preprocessing import MinMaxScaler
from flask_cors import CORS
import numpy as np
from sklearn.preprocessing import LabelEncoder

app = Flask(__name__)


#######" THIS PART IS UNSW15 IMPORTATION "



# model4= load('UKNNWithBestParamChi2.joblib')
model6=load('USVMWithBestParamColumnsCorr.joblib')
# model7=load('UKNNWithBestParamRFE.joblib')
# selector4,selected_features4= load('Chi2Selection.joblib')

UnswScaler =load('UnswScaler.joblib')
e1= load('label_encoder_srcip.joblib')
e2= load('label_encoder_sport.joblib')
e3= load('label_encoder_dstip.joblib')
e4= load('label_encoder_dsport.joblib')
e5= load('label_encoder_proto.joblib')
e6= load('label_encoder_service.joblib')
e7= load('label_encoder_state.joblib')


# e7= load('f7.joblib')
CORS(app)

#

####Another Route
@app.route('/predict-Unsw', methods=['POST'])
def predictUnsw():
    try:
        if 'file1' not in request.files:
            raise ValueError('File not found in request.')  
        print('Request received at /predict-Unsw')

        file1 = request.files['file1']
        if file1.filename.endswith('.json'):
           file_content = file1.read()
           
           print('JSON file content:', file_content)  # Add this line to print the file content
           try:
                df = pd.read_json(io.BytesIO(file_content))
                print('JSON loaded successfully')  # Add this line to confirm that JSON is loaded
           except Exception as json_error:
                print('Error loading JSON:', json_error)
        # Check if 'file1' is in the request files
        
        
            # Preprocess the JSON data
            # This csv file contains names of all the features

# Load the feature names from the CSV file
        df_col = pd.read_csv('NUSW-NB15_features.csv', encoding='ISO-8859-1')
        df_col['Name'] = df_col['Name'].apply(lambda x: x.strip().replace(' ', '').lower())

# Rename the DataFrame columns
        df.columns = df_col['Name']


# Data preprocessing (similar to the Flask version)
        df['attack_cat'] = df.attack_cat.fillna(value='normal').apply(lambda x: x.strip().lower())
        df['attack_cat'] = df['attack_cat'].replace('backdoors', 'backdoor', regex=True).apply(lambda x: x.strip().lower())
        df['service'] = df['service'].replace('-', 'unknown')
        df['ct_ftp_cmd'] = df['ct_ftp_cmd'].astype(str).str.strip()
        df['ct_ftp_cmd'].replace('', np.nan, inplace=True)
        df['ct_ftp_cmd'] = pd.to_numeric(df['ct_ftp_cmd'], errors='coerce')
        data = {
             'srcip': ['59.166.0.4'], 'sport': [1043], 'dstip': ['149.171.126.3'], 'dsport': [53],'proto': ['tcp'],
   'state': ['FIN'],'dur': [0.015861],'sbytes': [1470.0],'dbytes': [1820.0],'sttl': [31.0],'dttl': [29.0],'sloss': [3.0],
    'dloss': [4.0],'service': ['unknown'],'sload': [589303.75],'dload': [589317.875],'spkts': [12.0],'dpkts': [12.0],
    'swin': [255.0],'dwin': [255.0],'stcpb': [639725026.0],'dtcpb': [638417164.0],'smeansz': [73.0],
    'dmeansz': [89.0],'trans_depth': [0.0],'res_bdy_len': [0.0],
    'sjit': [19.124899],'djit': [2.653561],'stime': [1424226977.0],'ltime': [1424226978.0],'sintpkt': [0.468262],
    'dintpkt': [0.414755],'tcprtt': [0.000613],'synack': [0.000483],'ackdat': [0.000122],'is_sm_ips_ports': [0.0],
    'ct_state_ttl': [0.0],'ct_flw_http_mthd': [0.0],'is_ftp_login': [0.0],'ct_ftp_cmd': [0.0],
    'ct_srv_src': [5.0],'ct_srv_dst': [5.0],'ct_dst_ltm': [3.0],'ct_src_ltm': [4.0],'ct_src_dport_ltm': [1.0],
    'ct_dst_sport_ltm': [1.0],'ct_dst_src_ltm': [2.0],'attack_cat': ['normal'],'label': [0.0]
            }

        nl = pd.DataFrame(data)

        numerical_col = df.select_dtypes(include=np.number).columns

        categorical_col = df.select_dtypes(exclude=np.number).columns

        for col in df.columns:
          if df[col].dtypes == 'object':
           val = nl[col].values[0] 
           df[col] = df[col].fillna(value=val).replace(' ', val)
          else:
           val = nl[col].values[0] 
           df[col] = df[col].fillna(value=val).replace(' ', val)

        df['is_ftp_login'] = np.where(df['is_ftp_login'] > 1, 1, df['is_ftp_login'])
        df.drop(['label', 'stime', 'ltime'], axis=1, inplace=True)
        df['attack_cat'].replace({'dos': 1, 'normal': 0, 'reconnaissance': 1, 'backdoor': 1, 'exploits': 1,
                          'analysis': 1, 'fuzzers': 1, 'worms': 1, 'shellcode': 1, 'generic': 1}, inplace=True)

# Convert categorical columns to strings
        df['srcip'] = df['srcip'].astype(str)
        df['sport'] = df['sport'].astype(str)
        df['dstip'] = df['dstip'].astype(str)
        df['dsport'] = df['dsport'].astype(str)
        df['proto'] = df['proto'].astype(str)
        df['service'] = df['service'].astype(str)
        df['state'] = df['state'].astype(str)

# Apply label encoding only to columns with label encoders
        df['srcip'] = e1.transform(df['srcip'])
        df['sport'] = e2.transform(df['sport'])
        df['dstip'] = e3.transform(df['dstip'])
        df['dsport'] = e4.transform(df['dsport'])
        df['proto'] = e5.transform(df['proto'])
        df['service'] = e6.transform(df['service'])
        df['state'] = e7.transform(df['state'])

# MinMax scaling

        x = pd.DataFrame(UnswScaler.transform(df.iloc[:, 0:45]),
                 columns=df.iloc[:, 0:45].columns, index=df.iloc[:, 0:45].index)
        y= df.iloc[:, 45]
# Drop unnecessary columns
        x_test_selected = x.drop(['dloss', 'dpkts', 'dwin', 'ct_src_dport_ltm'], axis=1)
        print(x_test_selected)
# Make predictions
        predictions6 = model6.predict(x_test_selected)

# Make predictions
        
        print(predictions6[0])
        print(y)
# Print predictions
        
        
        labels6 =  ['False Negative' if (pred == 0 and att == 1) else 'False Positive' if (pred == 1 and att == 0) else 'True Negative' if (pred == 0 and att == 0) else 'True Positive' if (pred == 1 and att == 1 ) else ' 'for pred, att in zip(predictions6, y)]
       
    
        response_data6 = {"predictions6": labels6}
        #response_data7 = {"predictions7": labels7}
        response_data_unsw = {
              
              "data6": response_data6,
             
                    }

        return jsonify(response_data_unsw)
       
    except Exception as e:
      # Get the line number where the exception occurred
       error_message = str(e)
       return jsonify({'error': error_message})



####End


if __name__ == '__main__':
    app.run(debug=True)
