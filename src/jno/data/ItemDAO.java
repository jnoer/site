package jno.data;

import jno.data.entities.Item;
import org.hibernate.Query;
import org.hibernate.Session;

import java.util.List;

public class ItemDAO {
    public static List<Item> getAll()
    {
        Session session = HibernateListener.sessionFactory.getCurrentSession();
        session.beginTransaction();

        List<Item> items =  session.createQuery("from Item").list();
        session.getTransaction().commit();
        return items;
    }

    public static Item getById(Long itemId)
    {
        Session session = HibernateListener.sessionFactory.getCurrentSession();
        session.beginTransaction();

        Query query = session.createQuery("from Item where id = :itemId");
        query.setLong("itemId", itemId);
        Item item = (Item)query.uniqueResult();
        session.getTransaction().commit();

        return item;
    }

    public static void deleteItem(Long itemId)
    {
        Session session = HibernateListener.sessionFactory.getCurrentSession();
        session.beginTransaction();

        Query query = session.createQuery("delete from Item where id = :itemId");
        query.setLong("itemId", itemId);
        query.executeUpdate();
        session.getTransaction().commit();
    }

    public static void save(Item item)
    {
        Item itemToSave = null;

        if(item.getId() != null)
        {
            itemToSave = getById(item.getId());
        }
        else
        {
            itemToSave = new Item();
        }

        Session session = HibernateListener.sessionFactory.getCurrentSession();
        session.beginTransaction();

        itemToSave.setName(item.getName());

        session.saveOrUpdate(itemToSave);
        session.getTransaction().commit();
    }
}
