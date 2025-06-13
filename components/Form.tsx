import Button from "./Button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

const Form = () => (
  <form className="flex flex-col">
    <div className="flex flex-col gap-[20px] mb-[20px]">
      <Input type="fullname" placeholder="Full Name" />
      <Input type="email" placeholder="Email Address" />
      <div className="flex flex-col lg:flex-row gap-[20px]">
        <Input type="phone" placeholder="Phone Number" />
        <Select>
          <SelectTrigger className="w-full rounded-none h-[54px] text-secondary outline-none">
            <SelectValue placeholder="Select a Service"></SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select a Service</SelectLabel>
              <SelectItem value="construction">Construction</SelectItem>
              <SelectItem value="renovation">Renovation</SelectItem>
              <SelectItem value="restoration">Restoration</SelectItem>
              <SelectItem value="consulting">Consulting</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
    <div className="flex flex-col gap-6 mb-5">
      {/* textarea */}
      <Textarea
        className="h-[180px] resize-none rounded-none"
        placeholder="Enter your message"
      />
    </div>
    {/* btn */}
    <Button text="Send Message" />
  </form>
);

export default Form;
