import LoginForm from "@/components/forms/LoginForm";

const LoginPage = () => {
  return (
    <div className="w-full h-[100dvh] py-32   flex items-center justify-center">
      <div className="w-[700px] h-[500px] rounded-xl shadow-2xl   mt-20 flex items-center ">
        <div className="flex-1 background-blur bg-red-400/50 rounded-s-xl h-full"></div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
