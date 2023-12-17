import socket
import threading

def handle_client(client_socket):
    # Receive the client's request
    request_data = client_socket.recv(4096)
    print(f"Received request:\n{request_data.decode('utf-8')}")

    # Extract the destination host and port from the request
    host = "example.com"  # Replace with the actual destination host
    port = 80              # Replace with the actual destination port

    # Create a socket to connect to the destination server
    remote_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    remote_socket.connect((host, port))

    # Forward the client's request to the destination server
    remote_socket.sendall(request_data)

    # Receive the response from the destination server
    response_data = remote_socket.recv(4096)
    print(f"Received response:\n{response_data.decode('utf-8')}")

    # Forward the response to the client
    client_socket.sendall(response_data)

    # Close the sockets
    client_socket.close()
    remote_socket.close()

def start_proxy(proxy_port):
    proxy_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    proxy_socket.bind(("0.0.0.0", proxy_port))
    proxy_socket.listen(5)

    print(f"[*] Proxy listening on port {proxy_port}")

    while True:
        client_socket, addr = proxy_socket.accept()
        print(f"[*] Accepted connection from {addr[0]}:{addr[1]}")

        proxy_thread = threading.Thread(target=handle_client, args=(client_socket,))
        proxy_thread.start()

if __name__ == "__main__":
    # Configure proxy settings
    proxy_port = 8080

    # Start the proxy server
    start_proxy(proxy_port)
