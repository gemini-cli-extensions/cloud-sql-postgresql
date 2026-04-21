import socket
import time
import sys

def main():
    for i in range(20):
        try:
            s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            s.settimeout(1)
            s.connect(('127.0.0.1', 50051))
            print('Port 50051 is open!')
            sys.exit(0)
        except Exception:
            print('Port not open yet, retrying...')
            time.sleep(1)
    print('Port failed to open')
    sys.exit(1)

if __name__ == '__main__':
    main()