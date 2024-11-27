import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>

      <h1>Country List</h1>

      <Link href="/country/pakistan" style={{margin: "5px", padding: "5px"}}>Pakistan</Link>
      <Link href="/country/india" style={{margin: "5px", padding: "5px"}}>India</Link>
      <Link href="/country/china" style={{margin: "5px", padding: "5px"}}>China</Link>
      <Link href="/country/japan" style={{margin: "5px", padding: "5px"}}>Japan</Link>
      <Link href="/country/germany" style={{margin: "5px", padding: "5px"}}>Germany</Link>
      
    </div>
  );
}
