
import Image from "../components/Image";
import { useRouter } from 'next/router';

function login() {
  const router = useRouter();
  return (
    <div>
      <div class="max-w-[60%] md:max-w-[30%] mx-auto">
        <Image src="/logos/cards-logo.png" alt="C3forMe" />
      </div>
    </div>
  )
}

export default login
