package br.com.gi.dao;
import java.util.ArrayList;
import java.util.List;
import br.com.gi.to.ProdutoTO;


public class ProdutoDAO {
	
	public static List<ProdutoTO> produto;

	public ProdutoDAO() {
	
		if (produto == null) {
			produto = new ArrayList<ProdutoTO>();
			
			ProdutoTO pto = new ProdutoTO();
			pto.setCodigo(1);
			pto.setTitulo("Abóbora");
			pto.setQuantidade(12.12); 
			produto.add(pto);
			
			pto = new ProdutoTO();
			pto.setCodigo(2);
			pto.setTitulo("Couve");
			pto.setQuantidade(12.12);
			produto.add(pto);
			
			pto = new ProdutoTO();
			pto.setCodigo(3);
			pto.setTitulo("peito de frango");
			pto.setQuantidade(12.12);
			produto.add(pto);
			
			pto = new ProdutoTO();
			pto.setCodigo(4);
			pto.setTitulo("Salsa");
			pto.setQuantidade(12.21);
			produto.add(pto);
			
			pto = new ProdutoTO();
			pto.setCodigo(5);
			pto.setTitulo("Alho");
			pto.setQuantidade(22.12);
			produto.add(pto);
			
			pto = new ProdutoTO();
			pto.setCodigo(6);
			pto.setTitulo("Berinjela");
			pto.setQuantidade(12.12);
			produto.add(pto);
		}
		
	}
	
	public ProdutoTO select(int codigo) {
		
		for(int i=0; i< produto.size(); i++) {
			if(produto.get(i).getCodigo() == codigo) {
				return produto.get(i);
				
			}
		}
		return new ProdutoTO();
	}

	public List<ProdutoTO> select() {
		return produto;
	}
	
	public boolean insert(String titulo, double quantidade) {
		ProdutoTO pto = new ProdutoTO();
		pto = new ProdutoTO();
		pto.setCodigo(produto.size()+1);
		pto.setTitulo(titulo);
		pto.setQuantidade(quantidade);
		produto.add(pto);
		return true;
	
	}
	
	public boolean update(int codigo, String titulo, double quantidade) {
		for(int i=0; i< produto.size(); i++) {
			if(produto.get(i).getCodigo() == codigo) {
				produto.get(i).setTitulo(titulo);
				produto.get(i).setQuantidade(quantidade);
				return true;
			}
		}
		return false;
	}
	
	public void delete(int codigo) {
		produto.remove(select(codigo));
				
			}
	}
	
	
	
	
	
