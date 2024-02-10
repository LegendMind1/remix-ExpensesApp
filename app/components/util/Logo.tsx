import { Link } from "@remix-run/react";

function Logo() {
  return (
    <h1 id="logo">
      <Link to="/">Expense Manager
      <p style={{marginTop:'0px', fontWeight:'lighter', paddingRight:'5px', fontSize: '10px', textAlign:'right', color:'white', backgroundColor:'#3D03A3', borderRadius:'50px'}}>by LegendSol</p>
      </Link>
    </h1>
  );
}

export default Logo;
