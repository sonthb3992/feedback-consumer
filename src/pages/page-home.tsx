import React from 'react'
import { UserInfo } from 'caffino-feedback-module';
import { ReviewConfig } from 'caffino-feedback-module';
import { ReviewForm } from 'caffino-feedback-module'

import { app } from '../firebase/firebase'

const HomePage = () => {

    
const dummyUserInfo: UserInfo = {
    userUid: "123456789",
    displayName: "John Doe",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/gemo-lab3.appspot.com/o/avatars%2FOIP.jpg?alt=media&token=dbe77a87-7623-4c48-8b7b-f980351e82bd",
  };
  
  const reviewConfig: ReviewConfig = {
    firebaseApp: app,
    reviewCollectionPath: "reviews_test"
  }
    
  return (
    <div>
        <ReviewForm orderUid='testOrderUid' isModal={false} userInfo={dummyUserInfo} reviewConfig={reviewConfig} onSuccess={() => alert("Success!")}
          onFailure={(error: any) => console.log(error)}
        ></ReviewForm>
        <p>Test</p>
    </div>
  )
}

export default HomePage;