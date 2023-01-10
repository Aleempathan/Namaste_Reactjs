const heading1= React.createElement('h2',{id:'header1'},'Namaste React 🙏')

const heading2= React.createElement('h3',{class:'heading2'},"Hello World , Welcome to React")

const container = React.createElement('div',{class:'container'},[heading1,heading2])

 const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(container)