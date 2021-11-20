package br.com.gi.to;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement		
public class ProdutoTO {

	private int codigo;
	private String titulo;
	private double quantidade;
	
	public ProdutoTO() {
		
	}

	public ProdutoTO(int codigo, String titulo, double quantidade) {
		super();
		this.codigo = codigo;
		this.titulo = titulo;
		this.quantidade = quantidade;
	}

	public int getCodigo() {
		return codigo;
	}

	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public double getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(double quantidade) {
		this.quantidade = quantidade;
	}

}
