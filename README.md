# merge-branch
github action for merge branch

## Usage
```yaml
  - name: Merge develop to main
  uses: dogoo-me/merge-branch@v1
  with:
    github_token: ${{github.token}}
    from_branch: develop
    to_branch: main
```
