import Image from "next/image"
export async function getStaticPaths() {
   const userData = await fetch("https://e-commerce-cbe7c-default-rtdb.firebaseio.com/products.json")
   const users = await userData.json()
   console.log(users)
   return {
      paths:users.map((el:any,index:any)=>{return{params:{id:index.toString()}}}),
      fallback: false
   }
}

export async function getStaticProps({ params }: any) {
   
   console.log(params)
   const user = await fetch(`https://e-commerce-cbe7c-default-rtdb.firebaseio.com/products/${params.id}.json`)

   const userData = await user.json()
   console.log(userData)
   return { props: { userData } }

}
export default function user({ userData }: any) {
   <div>
      <h1 style={{color:"white"}}>
         dsdsdsdssssssssssssssssssssssssssssssafa
      </h1>
      <Image priority height={21} width={21} src={userData.imageUrl} alt="not found" />
   </div>

}

