package com.kiris.factorial_app;

public class App 
{
	public static long factorial(int n) {
        long fact = 1;
        for(int i = 1; i <= n; i++) {
            fact *= i;
        }
        return fact;
    }
	
    public static void main( String[] args )
    {
    	int num = 5;

        System.out.println("Factorial of " + num + " is: " + factorial(num));
       
    }
}
