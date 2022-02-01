---
anchor: "Projects"
header: "Projects"
subheader: ""
projects: {
  visai: [{
    imageFileName: "projects/alpr.gif",
    imageFileNameDetail: "projects/alpr.gif",
    header: "ALPR and Identification for Indian Vehicles",
    subheader: "Some next level surveillance!",
    content: "Engineered a framework to detect License Plates (LPs) of Indian vehicles, extract text using a state-of-the-art OCR mechanism and automatically bypass the CAPTCHA of an Indian vehicle database to get complete vehicle and owner details (PUC, Insurance) from the license plate itself. The model was trained on more that 2500 images with most of them captured manually!",
    date: "January, February 2020",
    links: [
      {
        name: "Github",
        url: "https://github.com/RonLek/ALPR-and-Identification-for-Indian-Vehicles"
      }
    ]
  },
  {
    imageFileName: "projects/animestyletransfer.png",
    imageFileNameDetail: "projects/animestyletransfer.png",
    header: "Style Transfer for Anime Colorization",
    subheader: "あなたの中の怠惰な漫画家のために",
    content: 'Working on implementing a style transfer system using a U-Net and an AC-GAN architecture to color anime. Referring <a href="https://arxiv.org/abs/1706.03319" target="_blank" noopener>paper</a> by Zhang et. al.',
    date: "March 2020",
    links: [
      {
        name: "Presentation",
        url: "https://docs.google.com/presentation/d/1KHQ_2E_-aF_9XzopDJM6oCP1m78-nAlMNKpm0cq5YBE/edit?usp=sharing"
      }
    ]
  },
  {
    imageFileName: "projects/imagecaptioning.png",
    imageFileNameDetail: "projects/imagecaptioning.png",
    header: "Image Captioning",
    subheader: "An image is worth a thousand words. Literally!",
    content: 'Built an image captioning system based on the <a href="https://arxiv.org/abs/1411.4555" target="_blank" noopener>Show and Tell</a> paper by Vinalys et. al. as part of the Minor Project under Dr. Bhupendra Singh and Dr. Tanmoy Hazra.',
    date: "November 2019",
    links: [
      {
        name: "Presentation",
        url: "https://docs.google.com/presentation/d/13e5U7qJS70Y4wSoi_kiTwVUEY9bxSaFX5ZmToZMsYZk/edit?usp=sharing"
      }
    ]
  },
  {
    imageFileName: "projects/facedetection.jpg",
    imageFileNameDetail: "projects/facedetection.jpg",
    header: "Face Detection",
    subheader: "Detect any face and its features!",
    content: 'Built a model using <strong>OpenCV</strong> that can detect faces and face features like eyes and the area containing eyes and nose.',
    date: "January 2019",
    links: [
      {
        name: "Github",
        url: "https://github.com/RonLek/Face-Detection"
      }
    ]
  },
  {
    imageFileName: "projects/twitter-bubble.png",
    imageFileNameDetail: "projects/twitter-bubble.png",
    header: "Twitter Sentiment Analysis",
    subheader: "Know the public sentiment regarding any topic on Twitter!",
    content: "Integrated the Twitter API in a model that analyses the public sentiments of Tweets regarding a particular topic and predicts the subjectivity and polarity rating for each Tweet.",
    date: "January 2018",
    links: [
      {
        name: "Github",
        url: "https://github.com/RonLek/Twitter-Sentiment-Analysis"
      }
    ]
  },
  {
    imageFileName: "projects/irisflowerclassification.jpg",
    imageFileNameDetail: "projects/irisflowerclassification.jpg",
    header: "Iris Flower Classification.",
    subheader: "Classifying Iris Flowers based on UCI Dataset",
    content: "Built a model that can classify Iris Flowers based on 4 parameters - sepal length, sepal width, petal length, petal width.
The model implements <strong>Logistic Regression, Linear Discriminant Analysis, Decision Tree Classifier, Gaussian Naive Bayes and Support Vector Machine</strong> on the dataset and chooses the most optimum.<br><br>Dataset used: <strong>UCI Iris Dataset</strong>",
    date: "October 2018",
    links: [
      {
        name: "Github",
        url: "https://github.com/RonLek/Iris-Flower-Classification"
      },
      {
        name: "Dataset",
        url: "https://archive.ics.uci.edu/ml/datasets/iris"
      },
    ]
  },
  ],
  aandw: [{
    imageFileName: "projects/memebuddy.png",
    imageFileNameDetail: "projects/memebuddy.png",
    header: "MemeBuddy",
    subheader: "Your wingman to get memes on Rocket.Chat 🚀",
    content: "Built a Rocket.Chat App that fetches trending memes from Reddit and posts them into a Rocket.Chat channel. Extended MemeBuddy for LiveChat users as well ;). <br><br> Try it out with a <code>/meme</code> in Rocket.Chat or a <code>:meme:</code> within LiveChat.",
    date: "March, April 2021",
    links: [
      {
        name: "Marketplace",
        url: "https://rocket.chat/apps/memebuddy"
      },
      {
        name: "Github",
        url: "https://github.com/RonLek/Rocket.Chat.MemeBuddy"
      },
      {
        name: "Medium",
        url: "https://rohanlekhwani.medium.com/making-a-rocket-chat-app-8eaaa0263e39"
      }
    ]
  },
  {
    imageFileName: "projects/twitter_logo.jpg",
    imageFileNameDetail: "projects/twitter_logo.jpg",
    header: "thetwitter",
    subheader: "Because someone already built thefacebook",
    content: 'Developed a Twitter clone using Ruby on Rails and Postgres at the backend. Features a feed similar to the "other" Twitter where users can perform CRUD operations to their tweets and see tweets by other users. Uses Gravatar for profile pictures.<br><br>Feel free to drop a Tweet in case you stumble upon The Twitter :)',
    date: "June 2020",
    links: [
       {
        name: "Live",
        url: "http://thetwitter.herokuapp.com/"
      },
      {
        name: "Github",
        url: "https://github.com/RonLek/thetwitter"
      }
    ]
  },
  {
    imageFileName: "projects/facelook.png",
    imageFileNameDetail: "projects/facelook.png",
    header: "FaceLook",
    subheader: "Identify and Report Missing Persons!",
    content: "Trained a <strong>TfLite</strong> model to recognize missing persons and used it in an app. On recognizing a person successfully the app also captures the GPS coordinates of the place where the person was scanned and sends it to the authorities. Achieved Top 1% out of 2500 participants in the Missing Hackathon on HackerEarth.",
    date: "August 2019",
    links: [
      {
        name: "Github",
        url: "https://github.com/RonLek/FaceLook_Missing_Hackathon"
      },
      {
        name: "YouTube",
        url: "https://youtu.be/rVd--I0j3o0"
      }
    ]
  },
  {
    imageFileName: "projects/iiitpuneapp.png",
    imageFileNameDetail: "projects/iiitpuneapp.png",
    header: "IIIT Pune App",
    subheader: "IIIT Pune in your pocket!",
    content: "Built the Institute Android App which has features like Live Mess Menu, Issuing book by just scanning the book barcode straight from your phone( <strong>13 types of 1-D and 2-D barcodes supported</strong> ), knowing what's new at IIIT Pune right from your phone and many other features.<br><br><strong>The App has been made the official App of IIIT Pune and has more than 500 downloads and 200+ 5-star ratings on the Play Store.</strong>",
    date: "September 2017 - August 2018",
    links: [
      {
        name: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.rohanlekhwani.iiitpuneapp"
      }
    ]
  },
  {
    imageFileName: "projects/instascraper.png",
    imageFileNameDetail: "projects/instascraper.png",
    header: "InstaScraper",
    subheader: "Download and save all Instagram Images of anyone on the Internet!",
    content: "Built a webscraper that could fetch all the images posted by any user on Instagram and save it on the disk. The scraper uses <strong>selenium</strong> and <strong>requests</strong> Python libraries to fetch all the data.",
    date: "October 2018",
    links: [
      {
        name: "Github",
        url: "https://github.com/RonLek/InstaScraper"
      }
    ]
  },
  {
    imageFileName: "projects/r&m.png",
    imageFileNameDetail: "projects/r&m.png",
    header: "Rick and Morty Webpage",
    subheader: "A webpage of my all-time favorite cartoons - Rick and Morty",
    content: "Built a webpage using Bootstrap and plain CSS and HTML of my all-time favorite cartoon series Rick and Morty. The webpage features all my favorite images and quotes of Rick and Morty which can also be downloded from the browser.",
    date: "June 2018",
    links: [
       {
        name: "Live",
        url: "https://ronlek.github.io/Rick-and-Morty-WebPage/"
      },
      {
        name: "Github",
        url: "https://github.com/RonLek/Rick-and-Morty-WebPage"
      }
    ]
  },
  ], 
  software: [{
    imageFileName: "projects/c-aware.jpg",
    imageFileNameDetail: "projects/c-aware.jpg",
    header: "C-AWARE",
    subheader: "I'm <s>not</s> a robot",
    content: "Built a Telegram bot that provides:
<ul>
<li>Self Diagnosis to check users and predict possible infection to reduce burden on hospitals and medical staff.</li>
<li>Location based official helpline numbers and contacts accessible from any State.</li>
<li>Latest News from verified sources about coronavirus to make everyone aware without creating panic.</li>
<li>Cases, Deaths, Recoveries of 5 Worst Hit and Least Hit countries around the world that change dynamically as new cases are reported from data published by the World Health Organization (WHO).</li>
<li>India Stats about COVID-19 that report the total cases, deaths, recoveries live happening in India from the Ministry of Health and Family Welfare.</li>
<li>Hospital capacities including number of rural and urban hospitals and the number of beds in them based on location of the user so that people can estimate the medical capability of the Nation.</li></ul>",
    date: "March 2020",
    links: [
      {
        name: "Live",
        url: "https://telegram.me/CoronavirusAwarenessBot"
      },
      {
        name: "Github",
        url: "https://github.com/RonLek/C-AWARE"
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/watch?v=sBCLJr4Z_XQ&feature=emb_title"
      },
    ]
  },
  {
    imageFileName: "projects/bideoplayer.png",
    imageFileNameDetail: "projects/bideoplayer.png",
    header: "Bideo Player",
    subheader: "The video player you won't find anywhere else(Cause it's an original :P)",
    content: "Built a Video Player from scratch that supports videos of MP4 format using <strong>JavaFx</strong>. The video player supports almost all the functions found in a commercial video player including changing video speed, jumping across videos and viewing in full-screen.",
    date: "April 2018",
    links: [
      {
        name: "Github",
        url: "https://github.com/RonLek/BideoPlayer"
      }
    ]
  },
  {
    imageFileName: "projects/alive.png",
    imageFileNameDetail: "projects/alive.png",
    header: "Alive",
    subheader: "A game which can be played straight from the Command Prompt",
    content: "Built a simple aircraft shooting game using C++ based on Nokia's famous game Space Impact.The game can directly be played from the console using keyboard controls.",
    date: "August 2017",
    links: [
      {
        name: "Github",
        url: "https://github.com/RonLek/Alive"
      }
    ]
  },
  {
    imageFileName: "projects/code.png",
    imageFileNameDetail: "projects/code.png",
    header: "Code Wars",
    subheader: "MCQ system for Annual Techfest of IIIT Pune",
    content: "Built a timed online MCQ system which was used by all the participants in the event of the Annual Techfest of IIIT Pune. The participants had to choose an option out of 4 possible options and were given scores at the end of the quiz or at the end of the time limit given whichever occurred earlier.<br><br><strong>Was praised by the Director of the Institute for building such a system.</strong>",
    date: "September 2018",
    links: [
      {
        name: "Github",
        url: "https://github.com/RonLek/Code-Wars"
      }
    ]
  },
  ]
}
---
