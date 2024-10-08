
import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import product from 'react';
import { AnySoaRecord } from 'dns';
import Image from 'next/image';
import { Delete, Edit } from '@mui/icons-material';

// Generate Order Data
function createData(
  id: number,
  date: string,
  name: string,
  shipTo: string,
  paymentMethod: string,
  amount: number,
) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}


const Order = async() => {

    const res = await fetch("https://clothing-store-server-blond.vercel.app/products", {
        next: {
          revalidate: 30,
        },
      });
    
      const products = await res.json();
     
    





    return (
        <React.Fragment>
        <Title>Recent Orders</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Product Image</TableCell>
              <TableCell>Actions</TableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map((product : any) => (
              <TableRow key={product.id}>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>
                <Image src={product.image} alt={product.title} width={50} height={50} />
                </TableCell>
                {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
                
                <TableCell>
                <Edit sx={{ color:"green", border:"green 1px solid",}}></Edit>
                </TableCell>
                <TableCell>
           <Delete sx={{ color:"red", border:"red 1px solid",}}></Delete>
             
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
          See more orders
        </Link>
      </React.Fragment>
    );
};

export default Order;
