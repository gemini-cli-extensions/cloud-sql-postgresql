import os
import re
import glob

def main():
    # Find all .yaml and .json files in /workspace/evals
    paths = glob.glob('/workspace/evals/**/*.yaml', recursive=True) + glob.glob('/workspace/evals/**/*.json', recursive=True)
    
    for path in paths:
        if os.path.isfile(path):
            try:
                with open(path, 'r') as f:
                    content = f.read()
                # Substitute ${VAR} with environment variables
                content = re.sub(r'\${(\w+)}', lambda m: os.environ.get(m.group(1), m.group(0)), content)
                with open(path, 'w') as f:
                    f.write(content)
                print(f"Successfully substituted environment variables in {path}")
            except Exception as e:
                print(f"Error processing {path}: {e}")

if __name__ == '__main__':
    main()