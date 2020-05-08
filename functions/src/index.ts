import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const postBookMark = functions
  .region("asia-northeast1")
  .https.onRequest((request, response) => {
    const { body } = request;
    const validatedBody = validate(body);
    admin
      .firestore()
      .collection("bookmark")
      .add(validatedBody)
      .then(() => {
        response.status(200).send();
      })
      .catch((err) => {
        response.status(400).send(err);
      });
  });

const validate = (body: any) => {
  const { title, url, comment } = body;
  if (!(title || url || comment)) {
    throw new Error("not filled");
  }
  if (!isStr(title) || !isStr(url) || !isStr(comment)) {
    throw new Error("not filled");
  }
  return { title, url, comment };
};

const isStr = (strable: any): strable is string => {
  return typeof strable === "string";
};
