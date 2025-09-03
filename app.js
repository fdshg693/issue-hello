// app.js
/**
 * Probot は GitHub App のイベントを受け取り、context.octokit でAPI呼び出しできます。
 */
module.exports = (app) => {
  // Issue が新規作成されたときだけ反応
  app.on("issues.opened", async (context) => {
    // コメント本文
    const body = "HELLO";
    // リポジトリ・Issue番号などは context.issue() がよしなに詰めてくれる
    await context.octokit.issues.createComment(
      context.issue({ body })
    );
  });
};
