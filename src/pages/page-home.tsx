import React from "react";
import { ReviewComponent, UserInfo } from "caffino-feedback-module";
import { FeedbackModuleConfig } from "caffino-feedback-module";
import { ReviewForm } from "caffino-feedback-module";

import { firebaseConfig } from "../firebase/firebase";

const HomePage = () => {
  const dummyUserInfo: UserInfo = {
    userUid: "123456789",
    displayName: "John Doe",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/gemo-lab3.appspot.com/o/avatars%2FOIP.jpg?alt=media&token=dbe77a87-7623-4c48-8b7b-f980351e82bd",
    canReply: true,
  };

  const reviewConfig: FeedbackModuleConfig = {
    firebaseConfig: firebaseConfig,
    reviewCollectionPath: "reviews_test",
  };

  return (
    <div>
      <ReviewComponent
        orderId="testOrderUid"
        config={reviewConfig}
        currentUser={dummyUserInfo}
      ></ReviewComponent>
    </div>
  );
};

export default HomePage;
