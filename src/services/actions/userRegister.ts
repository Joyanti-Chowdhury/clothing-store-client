"use server"

export const userRegister = async (formData: any) => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/register`, {
    // const res = await fetch(`http://localhost:5000/api/v1/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
      },    
      body: JSON.stringify(formData),
        // body: formData,
        cache: "no-store",
      })
   
 
  const userInfo = await res.json()
    return userInfo;
}

