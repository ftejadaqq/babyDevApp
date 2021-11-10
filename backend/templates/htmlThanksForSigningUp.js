module.exports = () => {
  return `<html>
          <head>
          <style>
          
          .thanks-container {
            background-color: rgb(86, 105, 171);
            height: 300px;
            width: 400px;
            margin-right: auto;
            margin-left: auto;
            margin-top: 20px;
          }
          .thanks-container-heading {
            height: 50px;
            text-align: center;
            padding-top: 30px;
          }
    
          .thanks-container-heading h1 {
            font-size: 18px;
            color: rgb(242, 242, 242);
            margin: 0;
          }
          .thanks-container-main {
            width: 340px;
            height: 200px;
            margin: auto;
            color: rgb(242, 242, 242);
          }
          .thanks-container-main h2 {
            font-size: 14px;
            margin-bottom: 0;
            margin-top: 0;
            padding-top: 10px;
            border-top: 1px solid lightgray;
          }
          .thanks-container-main p {
            font-size: 12px;
          }
          .thanks-container-main a {
            color: rgb(252, 234, 99);
            font-size: 12px;
            text-decoration: none;
          }
          
         .thanks-container-main p:nth-child(2) {
            text-align: center;
         }
         
        </style>
          </head>
          
               <div class="thanks-container">
               <div class="thanks-container-heading">
                  <div><h1>montessori by month</h1></div>
               </div>
               <div class="thanks-container-main">
                  <div><h2>Welcome!</h2></div>
                  <div>
                     <p>
                     Thanks for signing up with us. Enjoy learning about baby
                     development and development appropriate toys at:
                     </p>
                  </div>
                  <div><a>montessoribymonth.com</a></div>
                  <div>
                     <p>
                     For questions or feedback, please email
                     <a>hello@montessoribymonth.com</a>
                     </p>
                  </div>
               </div>
               </div>
            
          </html>`;
};

// put all html with footer header and css (css goes inside style tag)
