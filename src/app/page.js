import Accordian from "@/Components/Accordian";
import Card from "@/Components/Card";
import HoverImage from "@/Components/HoverImage";
import image from '../../public/Employee.jpg'
const AccordianData = [
  {
    title: "How fast will i receive my design?",
    desc: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur tenetur debitis quisquam, ab natus aliquid obcaecati! Id, repellat sunt, minus odit sint impedit animi, sit molestias totam maxime voluptatum eos.",
  },
  {
    title: "How many designs are there?",
    desc: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur tenetur debitis quisquam, ab natus aliquid obcaecati! Id, repellat sunt, minus odit sint impedit animi, sit molestias totam maxime voluptatum eos.",
  },
  {
    title: "Do you offer discounnts on annual plans?",
    desc: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur tenetur debitis quisquam, ab natus aliquid obcaecati! Id, repellat sunt, minus odit sint impedit animi, sit molestias totam maxime voluptatum eos.",
  },
  {
    title: "What tools do you use for design",
    desc: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur tenetur debitis quisquam, ab natus aliquid obcaecati! Id, repellat sunt, minus odit sint impedit animi, sit molestias totam maxime voluptatum eos.",
  },
];

const HoverData=[
  {
  id:'01',
  title:'ELEVATE DESIGN AGENCY',
  image:image
},
{
  id:'02',
  title:'Ravens.co',
  image:image
},
{
  id:'03',
  title:'uphoria  yoga studio',
  image:image
},

]
export default function Home() {
  return (
    <div>
      <div className="p-10">
        <Card/>
      </div>
      <div className="p-5">
        {AccordianData.map((item,index)=>(
          <div>
            <Accordian title={item.title} description={item.desc} />
            </div>
        ))}
      </div>
      <div className="px-4 pt-10">
        {HoverData.map((item,index)=>(
          <div>
            <HoverImage id={item.id} tittle={item.title} image={item.image}/>
            </div>
        ))}
      </div>
    </div>
  );
}
