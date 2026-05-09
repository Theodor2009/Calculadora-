import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int opcao;

        do {

            System.out.println("\n=== CALCULADORA ===");
            System.out.println("1 - Somar");
            System.out.println("2 - Subtrair");
            System.out.println("3 - Multiplicar");
            System.out.println("4 - Dividir");
            System.out.println("0 - Sair");
            System.out.print("Escolha uma opção: ");

            opcao = sc.nextInt();

            if (opcao >= 1 && opcao <= 4) {

                System.out.print("Digite o primeiro número: ");
                double n1 = sc.nextDouble();

                System.out.print("Digite o segundo número: ");
                double n2 = sc.nextDouble();

                double resultado;

                switch (opcao) {

                    case 1:
                        resultado = n1 + n2;
                        System.out.println("Resultado: " + resultado);
                        break;

                    case 2:
                        resultado = n1 - n2;
