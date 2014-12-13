package jno.data;

import jno.data.entities.Item;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.util.List;

/**
 * Root resource (exposed at "myresource" path)
 */
@Path("item")
@Produces(value = "application/json; charset=UTF-8;")
public class ItemResource {

    /**
     * Method handling HTTP GET requests. The returned object will be sent
     * to the client as "text/plain" media type.
     *
     * @return String that will be returned as a text/plain response.
     */
    @GET
    public List<Item> getAll() {
        return ItemDAO.getAll();
    }

    @POST
    public void addItem(Item item) {
        ItemDAO.save(item);
    }

    @DELETE
    @Path("{id}")
    public Response deleteItem(@PathParam("id") String id)
    {
        ItemDAO.deleteItem(new Long(id));
        return Response.ok().build();
    }
}