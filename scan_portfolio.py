import os

# Files commonly found in web portfolios or modern web projects
# (Modify these based on whether your portfolio is HTML/CSS or React/Vite/Next.js)
COMMON_FILES = [
    'index.html',
    'package.json',
    'README.md',
    '.gitignore',
]


def scan_portfolio(root_dir='.'):
  abs_root = os.path.abspath(root_dir)
  print(f'=== Scanning Portfolio Directory ===')
  print(f'Path: {abs_root}\n')

  all_files = []
  total_size_bytes = 0

  # Walk through the directory, ignoring the .git folder
  for dirpath, dirnames, filenames in os.walk(root_dir):
    if '.git' in dirpath:
      continue
    for filename in filenames:
      full_path = os.path.join(dirpath, filename)
      rel_path = os.path.relpath(full_path, root_dir)
      all_files.append(rel_path)
      try:
        total_size_bytes += os.path.getsize(full_path)
      except OSError:
        pass

  # Summary statistics
  total_size_mb = total_size_bytes / (1024 * 1024)
  print(f'Total Files: {len(all_files)}')
  print(f'Total Size: {total_size_mb:.2f} MB\n')

  # Check for essential project files
  print('--- Essential File Check ---')
  for file in COMMON_FILES:
    file_path = os.path.join(root_dir, file)
    if os.path.exists(file_path):
      print(f' [OK] Found: {file}')
    else:
      print(f' [!] Missing or Not Found: {file} (Check if required)')

  # Sample listing
  print('\n--- File Tree Sample (First 25 files) ---')
  for f in sorted(all_files)[:25]:
    print(f'   {f}')

  if len(all_files) > 25:
    print(f'   ... and {len(all_files) - 25} more files.')
  print('\nScan complete!')


if __name__ == '__main__':
  scan_portfolio()