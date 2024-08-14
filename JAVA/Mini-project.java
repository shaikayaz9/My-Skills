import java.util.*;

class Code{
  public static void main(String args[]){
    System.out.println("hello user find the value of Computer");
      Scanner sc = new Scanner(System.in);

      int random = (int)(Math.random()*100);
      System.out.print("Enter your number (1-100) : ");
      int user = sc.nextInt();

  while(random != user){
    if (random > user){
        System.out.print("increase the value of :");
          user = sc.nextInt();
    }else if(random < user){
        System.out.print(" dicrease the value of user : ");
          user = sc.nextInt();
    }
     }
   System.out.print("Congratulation you founded ! " + user);
  }
}