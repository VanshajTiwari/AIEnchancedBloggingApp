"use client"
import { RevealWrapper } from "next-reveal";

export default function SectionCompo(){
    return (
        <RevealWrapper duration={2000} distance="100px" opacity={0} reset={false}>
        <section className="flex flex-col jusitfy-center items-center p-12">
                  <h1 className="text-6xl font-bold text-center mb-4">World is life of Knowledge THings</h1>
                  <p>Come Share you Thoughts you magic with Other Beings</p>
                  <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laudantium eum neque nihil est unde numquam ullam architecto sapiente deleniti. Blanditiis ipsum aliquid impedit facere labore, vero laudantium debitis accusamus tempore voluptas, necessitatibus repellendus asperiores, ea est. Reiciendis odio harum ullam ut culpa nobis, debitis officiis enim a iste? Laborum inventore, distinctio ad reiciendis consequuntur voluptate nobis quod sunt ratione modi magni sint obcaecati sapiente fugiat exercitationem soluta eveniet perferendis? Officiis ratione vitae dolorem laudantium sed itaque rem, atque delectus, eum asperiores sequi in aliquid velit odio reiciendis! Iusto eligendi iure ducimus? Dolore similique consequuntur repudiandae obcaecati eaque, quo voluptas?</p>
        </section>
      </RevealWrapper>
    )
}