 package br.com.gi.resource;



import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/cadastro")
public class CadastroResource {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public String[][] getDados(){
		String[][] dados = {
				{"abobora","15KG"},
				{"couve","1KG"},
				{"peito de frango", "2KG"},
				{"alho","5KG"},
				{"berinjela","6KG"},
		};
		return dados;
	}
}
