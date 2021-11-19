package br.com.gi.bo;

import java.util.List;

import br.com.gi.dao.ProdutoDAO;
import br.com.gi.to.ProdutoTO;

public class ProdutoBO {

	private ProdutoDAO pd = new ProdutoDAO();
	
	public List <ProdutoTO> listar(){
		pd = new ProdutoDAO();
		return pd.select();
		
	}
	public ProdutoTO listar(int codigo){
		pd = new ProdutoDAO();
		return pd.select(codigo);
	}
	public boolean insert(ProdutoTO produto) {
		pd = new ProdutoDAO();
		return pd.insert(produto.getTitulo(), produto.getQuantidade());
	}
	public boolean update(int codigo, ProdutoTO produto) {
		pd = new ProdutoDAO();
		return pd.update(codigo, produto.getTitulo(), produto.getQuantidade());
	}
	public void delete(int codigo) {
		pd = new ProdutoDAO();
		pd.delete(codigo);
	}
}

