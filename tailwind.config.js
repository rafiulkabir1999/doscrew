/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        
            'bg_image' : "linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.01)),url(../public/cover.png)",
            "bgnotice" : "url(../public/coversm.jpg)",
            "bg_Cover" : "linear-gradient(rgba(0, 0, 0, 0.001), rgba(0, 0, 0, 0.001)),url(../public/coverFullScreen.png)",
            "card1":"url(../public/card1.png)",
            "card2":"url(../public/card2.png)"
        
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        "nav" : "cubic-bezier(0.76, 0.82, 0, 1.46)"
      }
      ,
      boxShadow: {
        'noticeboard': '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
        "header": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        "footer" : "box-shadow: 0px -4px 4px 0px rgba(0, 0, 0, 0.25"
      },
      border: {
        'buttonborder': ' 1px solid #0C63B4',
        "loginborder" : "1px solid rgba(0, 0, 0, 0.25)"
      },

      colors: {
        bone:'#F1D1D0',
        btwo:'#0C63B4',
        bthree:'#F0ECE3',
        bfour:'#0C63B4',
        baseblue:"#262161",
        baseliteblue:"#0C63B4",
        footer:"#9CD3F9",
        inputplaceholder:"rgba(0, 0, 0, 0.40)",
        submitbutton:'#F0AD4E',
        noticebackground:"#effaff",
        shadowtop:"",
        transparentBlack:" rgba( 0 , 0 , 0 , 0.502 )",
        otpHeader:"#D5ECC2",
        resendOTP:"#F0AD4E"
      }
     
    },

    
  },
  plugins: [],
}
