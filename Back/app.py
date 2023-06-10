from flask import Flask, request, jsonify
from joblib import load
import pandas as pd
import io
from sklearn.preprocessing import MinMaxScaler
from flask_cors import CORS
import numpy as np


app = Flask(__name__)
model = load('MyModal1.joblib')
selector, selected_features = load('MyFeatureSelection1.joblib')

model2 = load('MyModal2.joblib')
selector2, selected_features2 = load('MyFeatureSelection2.joblib')

model3 = load('MyModal3.joblib')
selector3, selected_features3 = load('MyFeatureSelection3.joblib')
NslScaler = load('NslScaler.joblib') 

model4= load('UKNNWithBestParamChi2.joblib')
model6=load('UKNNWithBestParamMutualInfoClassif.joblib')
model7=load('UKNNWithBestParamRFE.joblib')
selector4,selected_features4= load('Chi2Selection.joblib')
selector6,selected_features6=load('MutualInfoSelection.joblib')
selector7,selected_features7=load('RFESel.joblib')
UnswScaler =load('UnswScaler.joblib')
e1= load('f1.joblib')
e2= load('f2.joblib')
e3= load('f3.joblib')
e4= load('f4.joblib')
e5= load('f5.joblib')
e6= load('f6.joblib')
e7= load('f7.joblib')
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        file = request.files['file']
        if file.filename.endswith('.json'):
            file_content = file.read()
            df = pd.read_json(io.BytesIO(file_content))
            
            # Preprocess the JSON data
            df.columns = ['duration', 'protocol_type', 'service', 'flag', 'src_bytes', 'dst_bytes', 'land',
                          'wrong_fragment', 'urgent', 'hot', 'num_failed_logins', 'logged_in', 'num_compromised',
                          'root_shell', 'su_attempted', 'num_root', 'num_file_creations', 'num_shells',
                          'num_access_files', 'num_outbound_cmds', 'is_host_login', 'is_guest_login', 'count',
                          'srv_count', 'serror_rate', 'srv_serror_rate', 'rerror_rate', 'srv_rerror_rate',
                          'same_srv_rate', 'diff_srv_rate', 'srv_diff_host_rate', 'dst_host_count',
                          'dst_host_srv_count', 'dst_host_same_srv_rate', 'dst_host_diff_srv_rate',
                          'dst_host_same_src_port_rate', 'dst_host_srv_diff_host_rate', 'dst_host_serror_rate',
                          'dst_host_srv_serror_rate', 'dst_host_rerror_rate', 'dst_host_srv_rerror_rate','label']
            
            df['protocol_type'].replace({'udp': 0, 'tcp': 1, 'icmp': 2}, inplace=True)

            df['flag'].replace({'OTH': 0, 'REJ': 1, 'RSTO': 2, 'RSTOS0': 3, 'RSTR': 4, 'S0': 5, 'S1': 6, 'S2': 7,
                                'S3': 8, 'SF': 9, 'SH': 10}, inplace=True)

            df['service'].replace({'aol': 0, 'auth': 1, 'bgp': 2, 'courier': 3, 'csnet_ns': 4, 'ctf': 5, 'daytime': 6,
                                   'discard': 7, 'domain': 8, 'domain_u': 9, 'echo': 10, 'eco_i': 11, 'ecr_i': 12,
                                   'efs': 13, 'exec': 14, 'finger': 15, 'ftp': 16, 'ftp_data': 17, 'gopher': 18,
                                   'harvest': 19, 'hostnames': 20, 'http': 21, 'http_2784': 22, 'http_443': 23,
                                   'http_8001': 24, 'imap4': 25, 'IRC': 26, 'iso_tsap': 27, 'klogin': 28, 'kshell': 29,
                                   'ldap': 30, 'link': 31, 'login': 32, 'mtp': 33, 'name': 34, 'netbios_dgm': 35,
                                   'netbios_ns': 36, 'netbios_ssn': 37, 'netstat': 38, 'nnsp': 39, 'nntp': 40,
                                   'ntp_u': 41, 'other': 42, 'pm_dump': 43, 'pop_2': 44, 'pop_3': 45, 'printer': 46,
                                   'private': 47, 'red_i': 48, 'remote_job': 49, 'rje': 50, 'shell': 51, 'smtp': 52,
                                   'sql_net': 53, 'ssh': 54, 'sunrpc': 55, 'supdup': 56, 'systat': 57, 'telnet': 58,
                                   'tftp_u': 59, 'tim_i': 60, 'time': 61, 'urh_i': 62, 'urp_i': 63, 'uucp': 64,
                                   'uucp_path': 65, 'vmnet': 66, 'whois': 67, 'X11': 68, 'Z39_50': 69}, inplace=True)
            
            df['label'].replace({ 
'sendmail':0, 'mailbomb':0, 'imap':0, 'neptune':1, 'rootkit':0, 'back':0, 'udpstorm':1, 'phf':0, 'ftp_write':0,
'guess_passwd':0, 'pod':1, 'mscan':0, 'land':1, 'teardrop':1, 'sqlattack':0, 'named':0, 'warezmaster':0, 'multihop':0, 'loadmodule':0, 
'ps':0, 'warezclient':0, 'worm':0, 'snmpgetattack':0, 'httptunnel':0, 'portsweep':0, 'normal':0, 'perl':0, 'buffer_overflow':0, 'xlock':0, 
'ipsweep':0, 'apache2':1, 'processtable':0, 'xterm':0, 'spy':0, 'snmpguess':0, 'nmap':0, 'smurf':1, 'saint':1, 'xsnoop':0, 'satan':0
  },inplace = True)
           
            attaque=df.iloc[:, -1]

            # Scaling
            # scaler = MinMaxScaler()
            # df_scaled = scaler.fit_transform(df.iloc[:, :-1])
            # df_scaled = pd.DataFrame(df_scaled, columns=df.columns[:-1])
           
            df_scaled=pd.DataFrame(NslScaler.transform(df.iloc[:, :-1]), 
            columns=df.iloc[:, :-1].columns, index=df.iloc[:, :-1].index)

            # Check if all the selected features are present in the prediction data Algo1
            missing_features = set(selected_features) - set(df.columns)
            if missing_features:
             return jsonify({'error': f'Missing required features: {", ".join(missing_features)}'})

            # Check if all the selected features are present in the prediction data algo2
            missing_features2 = set(selected_features2) - set(df.columns)
            if missing_features2:
             return jsonify({'error': f'Missing required features: {", ".join(missing_features2)}'})

            # Check if all the selected features are present in the prediction data algo3
            missing_features3 = set(selected_features3) - set(df.columns)
            if missing_features3:
             return jsonify({'error': f'Missing required features: {", ".join(missing_features3)}'})




           # Apply feature selection to the prediction data
            df_selected = pd.DataFrame(df_scaled, columns=df.columns[:-1])[selected_features]

             # Apply feature selection to the prediction data
            df_selected2 = pd.DataFrame(df_scaled, columns=df.columns[:-1])[selected_features2]

             # Apply feature selection to the prediction data
            df_selected3 = pd.DataFrame(df_scaled, columns=df.columns[:-1])[selected_features3]
            
            # Make predictions using the loaded model
            predictions = model.predict(df_selected)
            labels = ['False Non Dos' if (pred == 0 and att == 1) else 'False Alarm' if (pred == 1 and att == 0) else 'True Nos Dos' if (pred == 0 and att == 0) else 'True Dos' if (pred == 1 and att == 1 ) else ' 'for pred, att in zip(predictions, attaque)]
            

             # Make predictions using the loaded model
            predictions2 = model2.predict(df_selected2)
            labels2 = ['False Non Dos' if (pred2 == 0 and att == 1) else 'False Alarm' if (pred2 == 1 and att == 0) else 'True Nos Dos' if (pred2 == 0 and att == 0) else 'True Dos' if (pred2 == 1 and att == 1 ) else ' 'for pred2, att in zip(predictions2, attaque)]


             # Make predictions using the loaded model
            predictions3 = model3.predict(df_selected3)
            labels3 = ['False Non Dos' if (pred3 == 0 and att == 1) else 'False Alarm' if (pred3 == 1 and att == 0) else 'True Nos Dos' if (pred3 == 0 and att == 0) else 'True Dos' if (pred3 == 1 and att == 1 ) else ' 'for pred3, att in zip(predictions3, attaque)]

            response_data = {"predictions": labels}
            response_data2 = {"predictions5": labels2}
            response_data3 = {"predictions6": labels3}

            response_data = {
              "data": response_data,
              "data2": response_data2,
               "data3": response_data3
                
                    }


            return jsonify(response_data)
        else:
            return jsonify({'error': 'Invalid file format. Please upload a JSON file.'})
    except Exception as e:
        error_message = str(e)
        return jsonify({'error': error_message})


####Another Route
@app.route('/predict-Unsw', methods=['POST'])
def predictUnsw():
    try:
        file1 = request.files['file1']
        if file1.filename.endswith('.json'):
           file_content = file1.read()
        df = pd.read_json(io.BytesIO(file_content))
       
        print('begin')  
            # Preprocess the JSON data
            # This csv file contains names of all the features
        df_col = pd.read_csv('NUSW-NB15_features.csv', encoding='ISO-8859-1')
     # Making column names lower case, removing spaces
        df_col['Name'] = df_col['Name'].apply(lambda x: x.strip().replace(' ', '').lower())
     # Renaming our dataframe with proper column names
    
        df.columns = df_col['Name']
        dataSet = df   
        dataSet['attack_cat'] = dataSet.attack_cat.fillna(value='normal').apply(lambda x: x.strip().lower())
        dataSet['attack_cat'] = dataSet['attack_cat'].replace('backdoors','backdoor', regex=True).apply(lambda x: x.strip().lower())
     # Convert the column to numeric type
        dataSet['ct_ftp_cmd'] = pd.to_numeric(dataSet['ct_ftp_cmd'], errors='coerce')

     # Calculate the median and replace null values
        val = dataSet['ct_ftp_cmd'].median()
        dataSet['ct_ftp_cmd'] = dataSet['ct_ftp_cmd'].fillna(value=val)
        data = {
             'srcip': ['59.166.0.4'], 'sport': [1043], 'dstip': ['149.171.126.3'], 'dsport': [53],'proto': ['tcp'],
   'state': ['FIN'],'dur': [0.015861],'sbytes': [1470.0],'dbytes': [1820.0],'sttl': [31.0],'dttl': [29.0],'sloss': [3.0],
    'dloss': [4.0],'service': ['-'],'sload': [589303.75],'dload': [589317.875],'spkts': [12.0],'dpkts': [12.0],
    'swin': [255.0],'dwin': [255.0],'stcpb': [639725026.0],'dtcpb': [638417164.0],'smeansz': [73.0],
    'dmeansz': [89.0],'trans_depth': [0.0],'res_bdy_len': [0.0],
    'sjit': [19.124899],'djit': [2.653561],'stime': [1424226977.0],'ltime': [1424226978.0],'sintpkt': [0.468262],
    'dintpkt': [0.414755],'tcprtt': [0.000613],'synack': [0.000483],'ackdat': [0.000122],'is_sm_ips_ports': [0.0],
    'ct_state_ttl': [0.0],'ct_flw_http_mthd': [0.0],'is_ftp_login': [0.0],'ct_ftp_cmd': [0.0],
    'ct_srv_src': [5.0],'ct_srv_dst': [5.0],'ct_dst_ltm': [3.0],'ct_src_ltm': [4.0],'ct_src_dport_ltm': [1.0],
    'ct_dst_sport_ltm': [1.0],'ct_dst_src_ltm': [2.0],'attack_cat': ['normal'],'label': [0.0]
            }

        nl = pd.DataFrame(data)
        for col in dataSet.columns:
              if dataSet[col].dtypes == 'object' :
                 val = nl[col].values[0]  # Mode value of the column in train data
                 dataSet[col] = dataSet[col].fillna(value=val).replace(' ', val)
              else:
                 val = nl[col].values[0]
                 dataSet[col] = dataSet[col].fillna(value=val).replace(' ', val)
        
    # Fixing binary columns 
        dataSet['is_ftp_login'] = np.where(dataSet['is_ftp_login']>1, 1, dataSet['is_ftp_login'])
        dataSet.drop(['label','stime','ltime'], axis=1, inplace=True)
        dataSet['attack_cat'].replace({ 'dos' : 1, 'normal':0, 'reconnaissance':0, 'backdoor':0, 'exploits':0,
       'analysis':0, 'fuzzers':0, 'worms':0, 'shellcode':0, 'generic':0},inplace = True)
        dataSet['srcip'] = dataSet['srcip'].astype(str)
        dataSet['srcip']= e1.transform(dataSet['srcip'])
        dataSet['sport'] = dataSet['sport'].astype(str)
        dataSet['sport']= e2.transform(dataSet['sport'])
        dataSet['dstip'] = dataSet['dstip'].astype(str)
        dataSet['dstip']= e3.transform(dataSet['dstip'])
        dataSet['dsport'] = dataSet['dsport'].astype(str)
        dataSet['dsport']= e4.transform(dataSet['dsport'])
        dataSet['proto'] = dataSet['proto'].astype(str)
        dataSet['proto']= e5.transform(dataSet['proto'])
        dataSet['service'] = dataSet['service'].astype(str)
        dataSet['service']= e6.transform(dataSet['service'])
        dataSet['state'] = dataSet['state'].astype(str)
        dataSet['state']= e7.transform(dataSet['state'])

      #   for f in features:
      #      dataSet[f] = dataSet[f].astype(str)
      #   for f in features:
      #      dataSet[f] = le.fit_transform(dataSet[f]) 
      #   scaler = MinMaxScaler()
 
      #   data=pd.DataFrame(scaler.fit_transform(dataSet.iloc[:,0:45]),
      #   columns=dataSet.iloc[:,0:45].columns, index=dataSet.iloc[:,0:45].index) 
      #   print('cleaned')
        x=pd.DataFrame(UnswScaler.transform(dataSet.iloc[:,0:45]),
            columns=dataSet.iloc[:,0:45].columns, index=dataSet.iloc[:,0:45].index) 
      #   x = data
        y = dataSet.iloc[:,45]
         # Apply feature selection to the prediction data
        X_test_new4 = selector4.transform(x)
       
        X_test_new6 = selector6.transform(x)
        X_test_new7 = selector7.transform(x)
        df_selected4 = x[selected_features4]
      
        df_selected6=x[selected_features6]
        df_selected7=x[selected_features7]
         # Make predictions using the loaded model
        predictions4 = model4.predict(X_test_new4)
     
        predictions6=model6.predict(X_test_new6)
        predictions7=model7.predict(X_test_new7)
        app.logger.info('Variable value: %s', predictions7)
        labels4 =  ['False Non Dos' if (pred == 0 and att == 1) else 'False Alarm' if (pred == 1 and att == 0) else 'True Nos Dos' if (pred == 0 and att == 0) else 'True Dos' if (pred == 1 and att == 1 ) else ' 'for pred, att in zip(predictions4, y)]
        labels6 =  ['False Non Dos' if (pred == 0 and att == 1) else 'False Alarm' if (pred == 1 and att == 0) else 'True Nos Dos' if (pred == 0 and att == 0) else 'True Dos' if (pred == 1 and att == 1 ) else ' 'for pred, att in zip(predictions6, y)]
        labels7 =  ['False Non Dos' if (pred == 0 and att == 1) else 'False Alarm' if (pred == 1 and att == 0) else 'True Nos Dos' if (pred == 0 and att == 0) else 'True Dos' if (pred == 1 and att == 1 ) else ' 'for pred, att in zip(predictions7, y)]
        response_data4 = {"predictions4": labels4}
    
        response_data6 = {"predictions6": labels6}
        response_data7 = {"predictions7": labels7}
        response_data_unsw = {
              "data4": response_data4,
              "data6": response_data6,
              "data7": response_data7,
                    }


        return jsonify(response_data_unsw)
       
    except Exception as e:
      # Get the line number where the exception occurred
       error_message = str(e)
       return jsonify({'error': error_message})



####End


if __name__ == '__main__':
    app.run(debug=True)
