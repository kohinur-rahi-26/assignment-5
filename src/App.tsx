import { Suspense } from "react";
import Banner from "./componete/Banner"
import Nav from "./componete/Nav"
import Card from "./componete/Card";
import Footer from "./componete/Footer";





const cardFetch = async() => {
  const res = await fetch( "/data.json");
  const data = await res.json()
  return data

};


function App() {
   const cardPromise = cardFetch()
  console.log(cardPromise)


  return (
    <>
     
      <Nav />
      <Banner/>
      
      <Suspense
        fallback ={<h2>Loading...........</h2>}>
       <Card  cardPromise={cardPromise} />

      </Suspense>
      <Footer />
      
      
      
      
    </>
  )
}

export default App

