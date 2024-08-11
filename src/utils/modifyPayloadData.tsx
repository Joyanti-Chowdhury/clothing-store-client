export const modifyPayloadData = (values: any) => {

  const obj = {...values};
  const data = JSON.stringify(obj);
  const formData = new FormData();
  formData.append('data', data);
 
  console.log(obj)
  console.log(data)
  console.log(formData.entries())
 

    return formData;
}