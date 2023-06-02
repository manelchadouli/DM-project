from flask import Flask, request, jsonify
from joblib import load
import pandas as pd
import io
from sklearn.preprocessing import MinMaxScaler
from flask_cors import CORS

app = Flask(__name__)
model = load('MyModal1.joblib')
selector, selected_features = load('MyFeatureSelection1.joblib')
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
                          'dst_host_srv_serror_rate', 'dst_host_rerror_rate', 'dst_host_srv_rerror_rate']
            
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

            # Scaling
            scaler = MinMaxScaler()
            df_scaled = scaler.fit_transform(df.iloc[:, :-1])
            df_scaled = pd.DataFrame(df_scaled, columns=df.columns[:-1])


            # Check if all the selected features are present in the prediction data 
            missing_features = set(selected_features) - set(df.columns)
            if missing_features:
             return jsonify({'error': f'Missing required features: {", ".join(missing_features)}'})

            
           # Apply feature selection to the prediction data
            df_selected = pd.DataFrame(df_scaled, columns=df.columns[:-1])[selected_features]
            
            # Make predictions using the loaded model
            predictions = model.predict(df_selected)
            labels = ['NonDoS   ' if pred == 0 else 'DoS   ' for pred in predictions]

            response_data = {"predictions": labels}
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
            
            # Preprocess the JSON data
            df.columns = ['duration', 'protocol_type', 'service', 'flag', 'src_bytes', 'dst_bytes', 'land',
                          'wrong_fragment', 'urgent', 'hot', 'num_failed_logins', 'logged_in', 'num_compromised',
                          'root_shell', 'su_attempted', 'num_root', 'num_file_creations', 'num_shells',
                          'num_access_files', 'num_outbound_cmds', 'is_host_login', 'is_guest_login', 'count',
                          'srv_count', 'serror_rate', 'srv_serror_rate', 'rerror_rate', 'srv_rerror_rate',
                          'same_srv_rate', 'diff_srv_rate', 'srv_diff_host_rate', 'dst_host_count',
                          'dst_host_srv_count', 'dst_host_same_srv_rate', 'dst_host_diff_srv_rate',
                          'dst_host_same_src_port_rate', 'dst_host_srv_diff_host_rate', 'dst_host_serror_rate',
                          'dst_host_srv_serror_rate', 'dst_host_rerror_rate', 'dst_host_srv_rerror_rate']
            
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

            # Scaling
            scaler = MinMaxScaler()
            df_scaled = scaler.fit_transform(df.iloc[:, :-1])
            df_scaled = pd.DataFrame(df_scaled, columns=df.columns[:-1])


            # Check if all the selected features are present in the prediction data 
            missing_features = set(selected_features) - set(df.columns)
            if missing_features:
             return jsonify({'error': f'Missing required features: {", ".join(missing_features)}'})

            
           # Apply feature selection to the prediction data
            df_selected = pd.DataFrame(df_scaled, columns=df.columns[:-1])[selected_features]
            
            # Make predictions using the loaded model
            predictions = model.predict(df_selected)
            labels = ['NonDoS   ' if pred == 0 else 'DoS   ' for pred in predictions]

            response_data = {"predictions": labels}
            return jsonify(response_data)
        else:
            return jsonify({'error': 'Invalid file format. Please upload a JSON file.'})
    except Exception as e:
        error_message = str(e)
        return jsonify({'error': error_message})




####End


if __name__ == '__main__':
    app.run(debug=True)
