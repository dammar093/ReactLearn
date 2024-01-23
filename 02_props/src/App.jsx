
import './App.css'
import Card from './components/Card'

function App() {


  return (
    <div style={{display:"flex",justifyContent:"center",gap:10}}>
       <Card name="Deepak" age={22} image="https://scontent.fdhi1-1.fna.fbcdn.net/v/t39.30808-6/414989025_2117907751903106_6835253823945518275_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=1dHOVHNk7LQAX85zyK5&_nc_ht=scontent.fdhi1-1.fna&oh=00_AfBI7BOzHc7Nu9gZAYEgpUbGfizGyBkreMmsMlftlQkeXg&oe=65AB72A5"/>
       <Card name="Ramesh" age={21} image="https://scontent.fdhi1-1.fna.fbcdn.net/v/t39.30808-6/413041548_122111692982161045_4774166661209153701_n.jpg?stp=dst-jpg_p843x403&_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=EDAd-b9xnY8AX_2gNOA&_nc_ht=scontent.fdhi1-1.fna&oh=00_AfAId1XShvvrM-aSJjSlo41dp3zTWZcaMc-_dOgSwL4Jxw&oe=65AB5C77"/>
    </div>
  )
}

export default App
