import Header from '../Partials/Header'
import Footer from '../Partials/Footer'


const RootLayout = ({ children }) => {
  return (
    <div className="root-main">
     
      <Header />
      {children}
      
    </div>
  )
}

export default RootLayout
