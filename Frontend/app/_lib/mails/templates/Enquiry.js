const enquiry=(sender)=>`<!DOCTYPE html>
<html>
  <head>
    <title>Hello, World!</title>
    <link rel="stylesheet" href="styles.css" />
    <style>
      body{
        background-color: #d4a373;
      }
      .details{
        font-family: system-ui;
        color:black;
        background-color: white;
        padding:5px;
        border-radius: 10px;
        padding-left:10px;
        margin: 10px;
        padding-bottom:20px;
      }
    </style>
  </head>
  
  <body>
      <div class="details">
        <h1>User Info</h1>
        <div>
          <div>
            <span>FullName :</span>
            <span>${sender}</span>
          </div>          
          <div>
            <span>Email :</span>
            <span>vanshajtiwari62@gmail.com</span>
          </div>          
          <div>
            <span>Phone No. :</span>
            <span>+91 9368644771</span>
          </div>         
          <div>
            <span>subject :</span>
            <span>This is Subject</span>
          </div>
        </div>
      </div>
            <div class="details">
        <h1>Message</h1>
        <div>
          <div>
              <p>This is mEssage</p>
          </div>          
        </div>
      </div>
  </body>
</html>`;

