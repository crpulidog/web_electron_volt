import { Button } from './Button'

export const Hero = () => {
  return (
    <section className="-mt-20 relative z-10">
        <h1 className="text-center text-2xl font-Raleway font-bold px-2">Frase llamativa del inicio Electron Volt! </h1>
        <p className="text-center text-sm mt-6 px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nihil porro, amet esse tempora nulla dolores facilis magnam quaerat delectus iste nisi architecto sequi, rerum rem! Veniam reiciendis doloribus ducimus!</p>
        <div className="text-center mt-6 mb-10">
            <Button text='Get Started' onClick={() => {}} styles='w-[240PX]'/>
        </div>
    </section>
  )
}