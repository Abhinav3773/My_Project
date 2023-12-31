package com.dental.VedDentalClinic.utility;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

import com.dental.VedDentalClinic.Exception.VedDentalException;

@Component
@Aspect
public class LoggingAspect
{

    private static final Log LOGGER = LogFactory.getLog(LoggingAspect.class);
    
    @AfterThrowing(pointcut="execution(* com.dental.VedDentalClinic.service.*Impl.*(..))",throwing="exception")
    public void logServiceException(VedDentalException exception)
    {
    	LOGGER.error(exception.getMessage(),exception);
    }

}

