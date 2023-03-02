import Header from '../Partials/Header'



const RootLayout = ({ children }) => {
  return (
    <div className="root-main">
     
      <Header />
      {children}
      
    </div>
  )
}

export default RootLayout