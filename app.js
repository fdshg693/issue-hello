// app.js
require('dotenv').config();

/**
 * Probot は GitHub App のイベントを受け取り、context.octokit でAPI呼び出しできます。
 */
module.exports = (app) => {
  // Issue が新規作成されたときだけ反応
  app.on("issues.opened", async (context) => {
  const body = "HELLO";
  await context.octokit.rest.issues.createComment(
    context.issue({ body })
  );
});

};
