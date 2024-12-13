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
import { useToast } from "@/hooks/use-toast"




export function NewsLetterDialog() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [isOpen, setIsOpen] = useState(true); 
    const [isLoading, setIsLoading] = useState(false); 
    const [emailSubmitted, setEmailSubmited] = useState(false); 
    const {toast} = useToast();

    const handleSubmit = async(e:any) => {
      setIsLoading(true);
      e.preventDefault();
      const data = {
        name, email
      }
      const JSONData = JSON.stringify(data);
      const options = {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSONData
      }
      const endpoint = 'api/send';

      const response = await fetch(endpoint, options);
      if (response.status === 200){
        setName("");
        setEmail("");
        setIsLoading(false);
        const responseData = await response.json();
        setEmailSubmited(true);
        toast({
          title:'Success',
          description:"Subscription successfull",

        })
        return responseData;
      }else{
        setName("");
        setEmail("");
        setIsLoading(false);
        toast({
          title:'Error',
          description:"An error occured",
          variant:"destructive"
        })
        console.error("An error occured",response.status, await response.json());
      }

    };



  return (
     <div className="opacity-1 mb-1 text-primary mt-4  dark:text-primary">
    <Dialog>
      <div className="mt-1">
    <DialogTrigger asChild >
        <Button className="bg-[#eee] w-[100%] dark:border mb-3" variant="ghost">Join our Newsletter</Button>
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
            <Input value={name} 
             onChange={(e) => setName(e.target.value)}
            id="name" 
            type="text" 
            className="col-span-3 mt-3" 
            placeholder="e.g Jon Doe" />
          </div>
          <div className="">
            <Label htmlFor="email" className="text-right text-lg">
            <span className="dark:text-primary"> Email</span> 
            </Label>
            <Input value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            id="email" 
            type="email" 
            placeholder="e.g jondoe@gmail.com" 
            className="col-span-3 mt-3" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <div>
              <Button onClick={handleSubmit} type="submit">
                {isLoading ? "Subscribing..." : "Subscribe"}
              </Button>
              {emailSubmitted && (
                <p className="text-green-500 text-sm mt-4">
                  Email submitted successfully
                </p>
              )}
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>

      </div>
     
    </Dialog>
    </div>
  )
}
