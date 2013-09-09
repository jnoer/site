package jno.data;

import jno.data.entities.User;
import org.hibernate.Query;
import org.hibernate.Session;

import java.util.List;

public class UserDAO {
    public static List<User> getAll()
    {
        Session session = HibernateListener.sessionFactory.getCurrentSession();
        session.beginTransaction();

        List<User> users =  session.createQuery("from User").list();
        session.getTransaction().commit();
        return users;
    }

    public static User getById(Long userId)
    {
        Session session = HibernateListener.sessionFactory.getCurrentSession();
        session.beginTransaction();

        Query query = session.createQuery("from User where id = :userId");
        query.setLong("userId", userId);
        User user = (User)query.uniqueResult();
        session.getTransaction().commit();

        return user;
    }

    public static void deleteUser(Long userId)
    {
        Session session = HibernateListener.sessionFactory.getCurrentSession();
        session.beginTransaction();

        Query query = session.createQuery("delete from User where id = :userId");
        query.setLong("userId", userId);
        query.executeUpdate();
        session.getTransaction().commit();
    }

    public static void save(User user)
    {
        User existingUser = getById(user.getId());

        Session session = HibernateListener.sessionFactory.getCurrentSession();
        session.beginTransaction();
//
        existingUser.setUserName(user.getUserName());

        session.saveOrUpdate(existingUser);
        session.getTransaction().commit();
    }
}
