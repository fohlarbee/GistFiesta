"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"



export function NewsLetterDialog() {

    const [name, setName ] = useState<string>('');
    const [email, setEmail ] = useState<string>('');
    const [isOpen, setIsOpen] = useState(true); // Add a state to control the dialog's visibility

    const handleSubmit = (event:any) => {
      console.log('yes')
      // Add your submission logic here
    };



  return (
    <Dialog  >
      <div 
      className="border  opacity-50 mb-5 text-primary bg-primary mt-4  dark:text-primary"></div>
      <div className="mt-1">
    <DialogTrigger asChild >
        <Button className="bg-[#eee] dark:bg-transparent dark:border  mb-3" variant="ghost">Join our Newsletter</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Subscribe to our news letter</DialogTitle>
          <DialogDescription>
          Stay in the Loop: Latest Gists and Updates from GistFiesta!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 dark:text-red-400">
          <div className="">
          <Label htmlFor="name" className="text-right text-lg dark:text-red-500">
            <span className="dark:text-primary"> Name</span> 
            </Label>
            <Input id="name" className="col-span-3 mt-3 " placeholder="e.g Jon Doe" />
          </div>
          <div className="">
            <Label htmlFor="username" className="text-right text-lg">
            <span className="dark:text-primary"> Email</span> 
            </Label>
            <Input id="email" placeholder="e.g jondoe@gmail.com" className="col-span-3 mt-3" type="email" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
          <Button onClick={handleSubmit}  type="submit">Subscribe</Button>


          </DialogClose>
        </DialogFooter>
      </DialogContent>

      </div>
     
    </Dialog>
  )
}
