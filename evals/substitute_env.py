import os
import re

def main():
    yaml_paths = ['/workspace/evals/model_config.yaml', '/workspace/evals/run_config.yaml']
    for yaml_path in yaml_paths:
        if os.path.exists(yaml_path):
            with open(yaml_path, 'r') as f:
                content = f.read()
            content = re.sub(r'\${(\w+)}', lambda m: os.environ.get(m.group(1), m.group(0)), content)
            with open(yaml_path, 'w') as f:
                f.write(content)
            print(f"Successfully substituted environment variables in {yaml_path}")
        else:
            print(f"File not found: {yaml_path}")

if __name__ == '__main__':
    main()