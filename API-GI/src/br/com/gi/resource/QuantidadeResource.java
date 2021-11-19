package br.com.gi.resource;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;


@Path("/quantidade")
public class QuantidadeResource {
	
	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public double getQuantidade() {
		return 15.10;
	}
	
}
