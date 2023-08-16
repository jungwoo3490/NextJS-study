import Link from "next/link";

export default function Home() {
  let name = 'lee';
  return (
    <div>
      <h4 className='title'>이정우</h4>
      <p className='title-sub'>by dev {name}</p>
    </div>
  )
}
