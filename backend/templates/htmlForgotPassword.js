module.exports = (password) => {
  return `<html>
          <head>
            <style>
              .password-reset-container {
                background-color: rgb(86, 105, 171);
                height: 170px;
                width: 400px;
                margin-right: auto;
                margin-left: auto;
                margin-top: 20px;
              }
              .password-reset-container-heading {
                height: 50px;
                text-align: center;
                padding-top: 30px;
              }

              .password-reset-container-heading h1 {
                font-size: 18px;
                color: rgb(242, 242, 242);
                margin: 0;
              }
              .password-reset-container-main {
                width: 340px;
                height: 80px;
                margin: auto;
                color: rgb(242, 242, 242);
              }
              .password-reset-container-main h2 {
                font-size: 14px;
                margin-bottom: 0;
                margin-top: 0;
                padding-top: 10px;
                border-top: 1px solid lightgray;
              }
              .password-reset-container-main a {
                color: rgb(252, 234, 99);
              }
            </style>
          </head>
              <div class="password-reset-container">
              <div class="password-reset-container-heading">
                  <div><h1>montessori by month</h1></div>
              </div>
              <div class="password-reset-container-main">
                  <div><h2>Thank you for resetting your password. Your new password is <b>${password}.</b></h2></div>
              </div>
              </div>
          </html>`;
};

// put all html with footer header and css (css goes inside style tag)
