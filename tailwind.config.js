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
        
            'bg_image' : "url(../public/cover.png)",
        
      },
      boxShadow: {
        'noticeboard': '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
        
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
        submitbutton:'#F0AD4E'
      }
     
    },

    
  },
  plugins: [],
}
