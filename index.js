const core = require('@actions/core')
const github = require('@actions/github')

async function run() {
  try {
    const token = core.getInput('github_token')
    const fromBranch = core.getInput('from_branch')
    const toBranch = core.getInput('to_branch')

    const octokit = github.getOctokit(token)

    const commit_message = `Merge ${fromBranch} to ${toBranch}`

    const response = await octokit.rest.repos.merge({
      repo: github.context.repo.repo,
      owner: github.context.repo.owner,
      base: toBranch,
      head: fromBranch,
      commit_message
    })

    core.info(`RES:\n${JSON.stringify(response)}`)

  }catch(e){
    core.setFailed(e.message)
  }
}

run()