import { useEffect, useState } from "react"
import Heading from "../heading"
import Image from "../image"
export default function SubSupport() {
    const [subsupport, setSubSupport] = useState([])
    const fetchSupport = async () => {
        const SubsupportData = await fetch("/api/supportPros")
        const finalSubSupport = await SubsupportData.json()
        console.log(finalSubSupport)
        setSubSupport(finalSubSupport.supportPros)
    }
    console.log(subsupport.supportPros)

    useEffect(() => {
        fetchSupport()
    }, [])

    return (
        <>
            {subsupport.map((item) => {
                return <div className="appleSubSupport-Conatiner" key={item.id}>
                    <div className="subSupport-align">
                    <Heading text={item.title} level={1} />
                    <p>{item.para}</p>
                    <a href={item.link} >{item.linkSub}</a>
                    <div className="sub-supportImg">
                        <Image src={item.url} className={"subSupport-img"}/>
                    </div>
                    </div>
                </div>
            })}
        </>
    )
}